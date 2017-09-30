
import { Cmp3511Component } from './cmp';
describe('Cmp3511Component', () => {
  it('should add', () => {
    expect(new Cmp3511Component().add3511(1)).toBe(3512);
  });
});