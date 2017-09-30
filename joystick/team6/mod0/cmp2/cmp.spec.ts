
import { Cmp9602Component } from './cmp';
describe('Cmp9602Component', () => {
  it('should add', () => {
    expect(new Cmp9602Component().add9602(1)).toBe(9603);
  });
});