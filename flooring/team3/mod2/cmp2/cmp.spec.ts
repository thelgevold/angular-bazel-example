
import { Cmp5322Component } from './cmp';
describe('Cmp5322Component', () => {
  it('should add', () => {
    expect(new Cmp5322Component().add5322(1)).toBe(5323);
  });
});