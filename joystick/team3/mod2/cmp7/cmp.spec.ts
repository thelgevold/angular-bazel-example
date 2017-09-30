
import { Cmp9327Component } from './cmp';
describe('Cmp9327Component', () => {
  it('should add', () => {
    expect(new Cmp9327Component().add9327(1)).toBe(9328);
  });
});