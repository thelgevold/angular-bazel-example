
import { Cmp1314Component } from './cmp';
describe('Cmp1314Component', () => {
  it('should add', () => {
    expect(new Cmp1314Component().add1314(1)).toBe(1315);
  });
});