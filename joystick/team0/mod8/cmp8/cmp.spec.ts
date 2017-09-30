
import { Cmp9088Component } from './cmp';
describe('Cmp9088Component', () => {
  it('should add', () => {
    expect(new Cmp9088Component().add9088(1)).toBe(9089);
  });
});