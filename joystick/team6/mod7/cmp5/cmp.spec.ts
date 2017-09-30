
import { Cmp9675Component } from './cmp';
describe('Cmp9675Component', () => {
  it('should add', () => {
    expect(new Cmp9675Component().add9675(1)).toBe(9676);
  });
});