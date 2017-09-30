
import { Cmp9708Component } from './cmp';
describe('Cmp9708Component', () => {
  it('should add', () => {
    expect(new Cmp9708Component().add9708(1)).toBe(9709);
  });
});