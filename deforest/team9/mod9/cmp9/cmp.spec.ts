
import { Cmp3999Component } from './cmp';
describe('Cmp3999Component', () => {
  it('should add', () => {
    expect(new Cmp3999Component().add3999(1)).toBe(4000);
  });
});