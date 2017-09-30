
import { Cmp3112Component } from './cmp';
describe('Cmp3112Component', () => {
  it('should add', () => {
    expect(new Cmp3112Component().add3112(1)).toBe(3113);
  });
});