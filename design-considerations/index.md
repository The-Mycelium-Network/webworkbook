# Design Considerations

The following are lists of common considerations to take into account when designing and implementing user interface elements. Note that while they are grouped by various user types, more often than not, considerations for one user type will also be applicable for others.

## Design Considerations for Blind Users

- [ ] All content must be presented in text or via a text equivalent 
- [ ] Information must not be conveyed by visual attributes alone
- [ ] All functionality must be available using only the keyboard (NOTE: Also test with a screen reader on as there might be subtle differences)
- [ ] The content must use markup with good structure and semantics (headings, landmarks, tables, lists, etc.)
- [ ] All custom controls must have the correct name/label, role (either with HTML or with ARIA), and value, and must change value when appropriate
- [ ] Users must receive immediate feedback after all actions
- [ ] Videos require audio descriptions
- [ ] Remember that on mobile, all features require a click actions and custom swipe actions will not work

## Design Considerations for Low Vision Users

- [ ] The [pinch-to-zoom feature must not be disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#viewport_basics)
- [ ] All text must pass [contrast guidelines](https://webaim.org/articles/contrast/) against the background
- [ ] Links, buttons, and controls must have a visible :focus state and should have a visible :hover state.
- [ ] The user interface should provide a clear visual distinction between content and controls

## Design Considerations for Color Blind Users

- [ ] All information must be understandable without needing to distinguish between colors Reds and greens are especially problematic when used as the only way to convey information.

## Design Considerations for Deaf Users

- [ ] All videos must have captions.
- [ ] All audio-only content must have transcripts.
- [ ] Sign language interpretation of videos can be very helpful.

## Design Considerations for Deafblind Users

- [ ] All of the considerations for blindness apply.
- [ ] All of the considerations for deafness apply.
- [ ] In addition, a transcript must be provided for audio and video content.

## Design Considerations for Users with Motor Disabilities

- [ ] All functionality must be available using only the keyboard.
- [ ] Links, buttons, and controls must have a visible :focus state and should have a visible :hover state.
- [ ] With session time-outs, warn users before the time expires (e.g. an accessible dialog or alert), and give them the option to extend the session. Ensure the warning itself allows for slow responses. A recommended minimum response time is 2 minutes.
- [ ] Provide [large click targets](https://support.google.com/accessibility/android/answer/7101858?hl=en) for users who have movements that are difficult to control.

## Design Considerations for Users with Speech Disabilities

- [ ] Don't depend on voice input

## Design Considerations for Users with Cognitive Disabilities

### For users with lower comprehension

- [ ] Simplify the interface as much as possible.
- [ ] Simplify the content as much as possible.
- [ ] Keep videos and audio as short as possible.
- [ ] Limit the number of choices on the screen.
- [ ] Provide help features.
- [ ] Test the usability of the interface with actual users

### For users with memory loss

- [ ] Retain information across screens, and within a path.
- [ ] Provide help features.
 
### For users with distractibility

- [ ] Reduce or eliminate distractions

## Design Considerations for Users with Reading Disabilities

- [ ] Supplement text with illustrations, videos, audio, etc.
- [ ] Avoid the highest level of contrast for text against background (e.g., black on white)

## Design Considerations for Users with Seizures

- [ ] Don't include videos, animations, or transitions with flashing light sequences of 3 times or more per second.

Thank you to [Deque](https://www.deque.com/) for the above information.