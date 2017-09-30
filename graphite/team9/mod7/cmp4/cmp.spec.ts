
import { Cmp6974Component } from './cmp';
describe('Cmp6974Component', () => {
  it('should add', () => {
    expect(new Cmp6974Component().add6974(1)).toBe(6975);
  });
});