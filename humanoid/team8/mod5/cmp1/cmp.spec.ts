
import { Cmp7851Component } from './cmp';
describe('Cmp7851Component', () => {
  it('should add', () => {
    expect(new Cmp7851Component().add7851(1)).toBe(7852);
  });
});