
import { Cmp7645Component } from './cmp';
describe('Cmp7645Component', () => {
  it('should add', () => {
    expect(new Cmp7645Component().add7645(1)).toBe(7646);
  });
});