import React, { Component } from 'react'
import { Link } from 'react-router'
import Bookmark from 'material-ui/lib/svg-icons/action/bookmark'
import { Meta } from './brief'

class Tags extends Component {
  render() {
    const iconStyle = {
      width: '16px',
      height: '16px',
      marginRight: '8px'
    }
    return (
      <div>
         <Bookmark style={iconStyle} color="#b6b6b6" />
         <Link to="">design</Link>
         <Link to="">web</Link>
         <Link to="">code</Link>
      </div>
    )
  }
}

class Article extends Component {
  render() {
    return (
      <article className="article">
        <img src="/images/googlelogo_color_272x92dp.png" alt=""/>
        <section className="header">
          <h2>权力的游戏 第六季</h2>
          <Meta />
        </section>
        <section className="content">
          This is default paragraph. Morbi sagittis sem quis lacinia faucibus, this is a text link orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. Suspendisse consectetur fringilla luctus.

          Single line blockquote:

          Stay hungry. Stay foolish.
          Multi line blockquote with a cite reference:

          People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things.
          Steve Jobs – Apple Worldwide Developers’ Conference, 1997
          Unordered Lists (Nested)

          List item one
          List item one
          List item one
          List item two
          List item three
          List item four
          List item two
          List item three
          List item four
          List item two
          List item three
          List item four
          Ordered Lists (Nested)

          List item one
          List item one
          List item one
          List item two
          List item three
          List item four
          List item two
          List item three
          List item four
          List item two
          List item three
          List item four
          HTML Tags

          These supported tags come from the WordPress.com code FAQ.

          Address Tag

          1 Infinite Loop
          Cupertino, CA 95014
          United States
          Anchor Tag (aka. Link)

          This is an example of a link.

          Abbreviation Tag

          The abbreviation srsly stands for “seriously”.

          Acronym Tag (deprecated in HTML5)

          The acronym ftw stands for “for the win”.

          Big Tag (deprecated in HTML5)

          These tests are a big deal, but this tag is no longer supported in HTML5.

          Cite Tag

          “Code is poetry.” —Automattic

          Code Tag

          You will learn later on in these tests that word-wrap: break-word; will be your best friend.

          Delete Tag

          This tag will let you strikeout text, but this tag is no longer supported in HTML5
        </section>
        <section className="tags">
          <Tags />
        </section>
      </article>
    )
  }
}

export default Article