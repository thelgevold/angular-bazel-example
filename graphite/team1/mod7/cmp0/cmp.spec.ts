
import { Cmp6170Component } from './cmp';
describe('Cmp6170Component', () => {
  it('should add', () => {
    expect(new Cmp6170Component().add6170(1)).toBe(6171);
  });
});