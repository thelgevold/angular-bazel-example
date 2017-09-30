
import { Cmp1363Component } from './cmp';
describe('Cmp1363Component', () => {
  it('should add', () => {
    expect(new Cmp1363Component().add1363(1)).toBe(1364);
  });
});