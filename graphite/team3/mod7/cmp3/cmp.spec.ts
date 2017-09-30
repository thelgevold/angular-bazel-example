
import { Cmp6373Component } from './cmp';
describe('Cmp6373Component', () => {
  it('should add', () => {
    expect(new Cmp6373Component().add6373(1)).toBe(6374);
  });
});