
import { Cmp1461Component } from './cmp';
describe('Cmp1461Component', () => {
  it('should add', () => {
    expect(new Cmp1461Component().add1461(1)).toBe(1462);
  });
});