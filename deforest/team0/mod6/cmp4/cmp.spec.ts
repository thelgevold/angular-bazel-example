
import { Cmp3064Component } from './cmp';
describe('Cmp3064Component', () => {
  it('should add', () => {
    expect(new Cmp3064Component().add3064(1)).toBe(3065);
  });
});