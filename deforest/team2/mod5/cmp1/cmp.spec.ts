
import { Cmp3251Component } from './cmp';
describe('Cmp3251Component', () => {
  it('should add', () => {
    expect(new Cmp3251Component().add3251(1)).toBe(3252);
  });
});