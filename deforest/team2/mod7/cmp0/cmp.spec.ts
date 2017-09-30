
import { Cmp3270Component } from './cmp';
describe('Cmp3270Component', () => {
  it('should add', () => {
    expect(new Cmp3270Component().add3270(1)).toBe(3271);
  });
});