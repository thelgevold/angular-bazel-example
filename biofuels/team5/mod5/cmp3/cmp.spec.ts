
import { Cmp1553Component } from './cmp';
describe('Cmp1553Component', () => {
  it('should add', () => {
    expect(new Cmp1553Component().add1553(1)).toBe(1554);
  });
});