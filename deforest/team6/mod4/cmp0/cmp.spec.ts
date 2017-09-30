
import { Cmp3640Component } from './cmp';
describe('Cmp3640Component', () => {
  it('should add', () => {
    expect(new Cmp3640Component().add3640(1)).toBe(3641);
  });
});