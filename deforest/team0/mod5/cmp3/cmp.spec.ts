
import { Cmp3053Component } from './cmp';
describe('Cmp3053Component', () => {
  it('should add', () => {
    expect(new Cmp3053Component().add3053(1)).toBe(3054);
  });
});