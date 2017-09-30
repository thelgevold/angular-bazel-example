
import { Cmp6098Component } from './cmp';
describe('Cmp6098Component', () => {
  it('should add', () => {
    expect(new Cmp6098Component().add6098(1)).toBe(6099);
  });
});