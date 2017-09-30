
import { Cmp9123Component } from './cmp';
describe('Cmp9123Component', () => {
  it('should add', () => {
    expect(new Cmp9123Component().add9123(1)).toBe(9124);
  });
});