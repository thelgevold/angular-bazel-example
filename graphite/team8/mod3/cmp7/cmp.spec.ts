
import { Cmp6837Component } from './cmp';
describe('Cmp6837Component', () => {
  it('should add', () => {
    expect(new Cmp6837Component().add6837(1)).toBe(6838);
  });
});