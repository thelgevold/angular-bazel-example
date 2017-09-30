
import { Cmp9253Component } from './cmp';
describe('Cmp9253Component', () => {
  it('should add', () => {
    expect(new Cmp9253Component().add9253(1)).toBe(9254);
  });
});