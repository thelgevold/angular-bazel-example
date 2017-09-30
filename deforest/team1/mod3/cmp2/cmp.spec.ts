
import { Cmp3132Component } from './cmp';
describe('Cmp3132Component', () => {
  it('should add', () => {
    expect(new Cmp3132Component().add3132(1)).toBe(3133);
  });
});