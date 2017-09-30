
import { Cmp9057Component } from './cmp';
describe('Cmp9057Component', () => {
  it('should add', () => {
    expect(new Cmp9057Component().add9057(1)).toBe(9058);
  });
});