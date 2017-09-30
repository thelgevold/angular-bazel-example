
import { Cmp6408Component } from './cmp';
describe('Cmp6408Component', () => {
  it('should add', () => {
    expect(new Cmp6408Component().add6408(1)).toBe(6409);
  });
});