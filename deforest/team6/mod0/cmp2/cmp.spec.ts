
import { Cmp3602Component } from './cmp';
describe('Cmp3602Component', () => {
  it('should add', () => {
    expect(new Cmp3602Component().add3602(1)).toBe(3603);
  });
});