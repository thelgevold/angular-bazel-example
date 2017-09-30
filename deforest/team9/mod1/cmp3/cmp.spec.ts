
import { Cmp3913Component } from './cmp';
describe('Cmp3913Component', () => {
  it('should add', () => {
    expect(new Cmp3913Component().add3913(1)).toBe(3914);
  });
});