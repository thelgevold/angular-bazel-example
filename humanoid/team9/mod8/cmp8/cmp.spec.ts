
import { Cmp7988Component } from './cmp';
describe('Cmp7988Component', () => {
  it('should add', () => {
    expect(new Cmp7988Component().add7988(1)).toBe(7989);
  });
});