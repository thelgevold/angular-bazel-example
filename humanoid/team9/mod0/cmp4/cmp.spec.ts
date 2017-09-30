
import { Cmp7904Component } from './cmp';
describe('Cmp7904Component', () => {
  it('should add', () => {
    expect(new Cmp7904Component().add7904(1)).toBe(7905);
  });
});