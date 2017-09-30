
import { Cmp2559Component } from './cmp';
describe('Cmp2559Component', () => {
  it('should add', () => {
    expect(new Cmp2559Component().add2559(1)).toBe(2560);
  });
});