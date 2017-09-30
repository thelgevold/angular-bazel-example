
import { Cmp9648Component } from './cmp';
describe('Cmp9648Component', () => {
  it('should add', () => {
    expect(new Cmp9648Component().add9648(1)).toBe(9649);
  });
});