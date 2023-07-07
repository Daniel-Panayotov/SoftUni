import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllMembers, getAllTeams, getCount } from '../data/data.js';

const browseTemplate = (userData, teams = [], members = [], page, teamCount) => html`
	<section id="browse">
		<article class="pad-med">
			<h1>Team Browser</h1>
		</article>

		${userData
			? html`
					<article class="layout narrow">
						<div class="pad-small">
							<a href="/newteam" class="action cta">Create Team</a>
						</div>
					</article>
			  `
			: null}
		${teams.map(
			t => html`
				<article class="layout">
					<img src=${t.logoUrl} class="team-logo left-col" />
					<div class="tm-preview">
						<h2>${t.name}</h2>
						<p>${t.description}</p>
						<span class="details">
							${members.filter(m => m.teamId == t._id).length || 0} Members
						</span>
						<div><a href="details/${t._id}" class="action">See details</a></div>
					</div>
				</article>
			`,
		)}
		${page > 1
			? html`
					<a href="?page=${page - 1}">&lt;Prev</a>
			  `
			: null}
		${teamCount - page * 2 > 0
			? html`
					<a href="?page=${page + 1}">Next&gt;</a>
			  `
			: null}
	</section>
`;

export async function showBrowse(ctx) {
	const page = Number(ctx.querystring.split('=')[1]);
	const teamCount = await getCount();
	const teams = await getAllTeams(page);
	const members = await getAllMembers();
	ctx.render(browseTemplate(ctx.userData, teams, members, page, teamCount));
}
