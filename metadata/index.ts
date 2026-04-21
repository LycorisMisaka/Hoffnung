import type { Creator } from '../scripts/types/metadata'
import { getAvatarUrlByGithubName } from '../scripts/utils'

/** 文本 */
export const siteName = 'Hoffnung'
export const siteShortName = 'Hoffnung'
export const siteDescription = '属于大家的开放多主题知识库'

/** 文档所在目录 */
export const include = ['笔记', '生活']

/** Repo */
export const githubRepoLink = 'https://github.com/LycorisMisaka/Hoffnung'
/** Discord */
export const discordLink = 'https://discord.gg/'

/** 无协议前缀域名 */
export const plainTargetDomain = 'N/A'
/** 完整域名 */
export const targetDomain = `https://${plainTargetDomain}`

/** 创作者 */
export const creators: Creator[] = [
  {
    name: 'LycorisMisaka',
    avatar: '',
    username: 'LycorisMisaka',
    title: '家里云爱好者',
    desc: '我对基础设施维护，自部署，NAS、网络架构搭建比较有见解',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/LycorisMisaka' },
      { type: 'twitter', icon: 'twitter', link: 'https://x.com/LycorisMisaka' },
    ],
    nameAliases: ['LycorisMisaka', '铃木大小姐', '铃木真依'],
    emailAliases: ['lycorismisaka@gmail.com'],
  },
  {
    name: 'LoliLin',
    avatar: '',
    username: 'LoliLin',
    title: '开源软件爱好者',
    desc: '伪开源开发者，但是目前没啥项目',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/LoliLin' },
      { type: 'twitter', icon: 'twitter', link: 'https://x.com/LolingVerse' },
    ],
    nameAliases: [],
    emailAliases: ['teawhat2000@gmail.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
