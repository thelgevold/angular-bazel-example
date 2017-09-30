
import { Cmp9850Component } from './cmp';
describe('Cmp9850Component', () => {
  it('should add', () => {
    expect(new Cmp9850Component().add9850(1)).toBe(9851);
  });
});