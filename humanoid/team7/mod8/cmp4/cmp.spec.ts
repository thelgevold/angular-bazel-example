
import { Cmp7784Component } from './cmp';
describe('Cmp7784Component', () => {
  it('should add', () => {
    expect(new Cmp7784Component().add7784(1)).toBe(7785);
  });
});