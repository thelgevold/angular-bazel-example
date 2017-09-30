
import { Cmp3711Component } from './cmp';
describe('Cmp3711Component', () => {
  it('should add', () => {
    expect(new Cmp3711Component().add3711(1)).toBe(3712);
  });
});