
import { Cmp9600Component } from './cmp';
describe('Cmp9600Component', () => {
  it('should add', () => {
    expect(new Cmp9600Component().add9600(1)).toBe(9601);
  });
});