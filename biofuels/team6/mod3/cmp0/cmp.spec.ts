
import { Cmp1630Component } from './cmp';
describe('Cmp1630Component', () => {
  it('should add', () => {
    expect(new Cmp1630Component().add1630(1)).toBe(1631);
  });
});