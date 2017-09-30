
import { Cmp9002Component } from './cmp';
describe('Cmp9002Component', () => {
  it('should add', () => {
    expect(new Cmp9002Component().add9002(1)).toBe(9003);
  });
});