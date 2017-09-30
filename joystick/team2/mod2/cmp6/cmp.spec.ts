
import { Cmp9226Component } from './cmp';
describe('Cmp9226Component', () => {
  it('should add', () => {
    expect(new Cmp9226Component().add9226(1)).toBe(9227);
  });
});