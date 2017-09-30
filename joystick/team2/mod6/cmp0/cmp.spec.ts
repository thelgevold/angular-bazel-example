
import { Cmp9260Component } from './cmp';
describe('Cmp9260Component', () => {
  it('should add', () => {
    expect(new Cmp9260Component().add9260(1)).toBe(9261);
  });
});