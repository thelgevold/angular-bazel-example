
import { Cmp5708Component } from './cmp';
describe('Cmp5708Component', () => {
  it('should add', () => {
    expect(new Cmp5708Component().add5708(1)).toBe(5709);
  });
});