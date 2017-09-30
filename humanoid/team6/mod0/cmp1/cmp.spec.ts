
import { Cmp7601Component } from './cmp';
describe('Cmp7601Component', () => {
  it('should add', () => {
    expect(new Cmp7601Component().add7601(1)).toBe(7602);
  });
});