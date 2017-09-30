
import { Cmp7644Component } from './cmp';
describe('Cmp7644Component', () => {
  it('should add', () => {
    expect(new Cmp7644Component().add7644(1)).toBe(7645);
  });
});