
import { Cmp6877Component } from './cmp';
describe('Cmp6877Component', () => {
  it('should add', () => {
    expect(new Cmp6877Component().add6877(1)).toBe(6878);
  });
});