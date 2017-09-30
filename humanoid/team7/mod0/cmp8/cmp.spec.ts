
import { Cmp7708Component } from './cmp';
describe('Cmp7708Component', () => {
  it('should add', () => {
    expect(new Cmp7708Component().add7708(1)).toBe(7709);
  });
});